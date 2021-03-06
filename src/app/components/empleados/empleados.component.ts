import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmpleadoService } from '../../services/empleados.service';
import { UploadService } from '../../services/upload.service'
import { MatPaginatorIntl } from '@angular/material';
import Swal from 'sweetalert2'
import { Global } from '../../services/global'
import { MatPaginatorIntlCro } from '../../utils/matPaginator.util'
import { EmpleadoModel } from '../../models/empleado.model'
import { Rol } from '../../helpers/role.helper'
declare var $: any;
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [EmpleadoService, UploadService, { provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro }]
})

export class EmpleadosComponent implements OnInit {
  displayedColumns: string[] = ['dni', 'rol', 'nombres', 'apellidos', 'direccion', 'email', 'edad', 'acciones'];
  dataSource: MatTableDataSource<EmpleadoModel>;
  nuevoEmpleadoForm: FormGroup
  filesToUpload: Array<File>;
  @ViewChild('TABLE') table: ElementRef;

  roles: Rol[] = [
    { value: 'ADMIN', viewValue: 'Admin' },
    //{ value: 'COMPRAS', viewValue: 'Compras' },
    { value: 'VENTAS', viewValue: 'Ventas' }
  ];

  get formControls() { return this.nuevoEmpleadoForm.controls }

  private buildForm() {
    return this.nuevoEmpleadoForm = this.formBuilder.group({
      dni: ['', [Validators.maxLength(8), Validators.required, Validators.pattern('[0-9]+')]],
      role: ['', [Validators.maxLength(10), Validators.required]],
      nombres: ['', [Validators.maxLength(60), Validators.required]],
      apellidos: ['', [Validators.maxLength(60), Validators.required]],
      edad: ['', [Validators.maxLength(2), Validators.required, Validators.pattern('[0-9]+')]],
      email: ['', [Validators.maxLength(40), Validators.required, Validators.email]],
      password: ['', [Validators.maxLength(30), Validators.required]],
      img: [''],
      direccion: ['', Validators.required]
    });
  }

  exportExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Libro 1');

    /* save to file */
    XLSX.writeFile(wb, 'EMPLEADOS.xlsx');
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _empleadoService: EmpleadoService,
    private formBuilder: FormBuilder,
    private _uploadService: UploadService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.listarEmpleados();
  }

  listarEmpleados() {
    this._empleadoService.listarEmpleados().subscribe(
      res => {
        this.dataSource = new MatTableDataSource(res.empleados);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error)
      }
    )
  }

  guardarEmpleado() {
    if (this.nuevoEmpleadoForm.invalid) {
      Swal.fire({
        type: 'error',
        title: 'Datos inv??lidos',
        text: 'Revise nuevamente y llene correctamente los campos.'
      })
      for (let i in this.nuevoEmpleadoForm.controls)
        this.nuevoEmpleadoForm.controls[i].markAsTouched();
      return;
    }
    this._empleadoService.nuevoEmpleado(this.nuevoEmpleadoForm.value).subscribe(
      res => {
        console.log(res.resp[0]._id);
        this._uploadService.makeFileRequest(Global.url + "/upload-image/" + res.resp[0]._id, [], this.filesToUpload, 'img')
          .then((result: any) => {
            console.log(result);
          })
        Swal.fire({
          type: 'success',
          title: 'El empleado ha sido a??adido correctamente',
          confirmButtonColor: '#3085d6',
          showConfirmButton: true,
        }).then(
          result => {
            $('#modalNuevoEmpleado').modal('hide');
            this.listarEmpleados();
            this.nuevoEmpleadoForm.reset();
          }
        )
      },
      err => {
        console.log(err);
      }
    )
  }

  borrarEmpleado(idEmpleado) {
    Swal.fire({
      title: '??Est??s seguro?',
      text: "El cambio no se podr?? revertir!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'S??, borrar!'
    }).then((result) => {
      console.log(result)
      if (result.value) {
        this._empleadoService.borrarEmpleado(idEmpleado).subscribe(
          result => {
            this.listarEmpleados();
            Swal.fire(
              'Eliminado!',
              'El empleado ha sido borrado correctamente',
              'success'
            )
          },
          err => {
            console.log(err);
            Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'Algo sali?? mal!'
            })
          }
        )
      }
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onFileChange(event) {
    this.filesToUpload = <Array<File>>event.target.files;
  }
}
