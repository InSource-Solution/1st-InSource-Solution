import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  constructor(public dialog: MatDialog, public snackbar: MatSnackBar) { }

  model: any = {};
  saveData: any[] = [];
  emailValidator = new FormControl('', [Validators.required, Validators.email]);

  cardsArry: any[] = [
    { id: 1, productName: 'Pieces 24', categoryName: 'Tea Set', src: 'card1.png', price: '34 $', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.' },
    { id: 2, productName: 'Pieces 20', categoryName: 'Mug Set', src: 'card2.png', price: '60 $', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.' },
    { id: 3, productName: 'Pieces 12', categoryName: 'Dinner Set', src: 'card3.png', price: '90.5 $', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.' },
    { id: 4, productName: 'Pieces 14', categoryName: 'Sets', src: 'card4.jpg', price: '24 $', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.' },
    { id: 5, productName: 'Pieces 16', categoryName: 'Tea Set', src: 'card1.png', price: '44 $', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.' },
    { id: 6, productName: 'Pieces 10', categoryName: 'Mug Set', src: 'card2.png', price: '49 $', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.' },
    { id: 7, productName: 'Pieces 8', categoryName: 'Dinner Set', src: 'card3.png', price: '69.12 $', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.' },
    { id: 8, productName: 'Pieces 11', categoryName: 'Sets', src: 'card4.jpg', price: '55.1 $', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing.' }
  ];

  openDetail(obj?: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '65vw';
    dialogConfig.disableClose = true;
    dialogConfig.data = obj;
    if (obj) {
      const dialogRef = this.dialog.open(DetailsComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(res => {
        if (res) {
          console.log(res);
        }
      })
    }
  }

  saveCart(obj?: any) {
    // let newObj = {};
    // if (this.saveData && this.saveData.length > 0) {
    //   this.saveData.forEach(x => {
    //     if (x.id == obj.id) {
    //       this.snackbar.open('Products Already Add You Cart...!', 'Ok', {
    //         duration: 4000,
    //       });
    //       return;
    //     }
    //     else{
    //       newObj = obj;
    //     }
    //   })
    // }
    // let data = newObj ? newObj : obj;
    this.saveData.push(obj);
    localStorage.setItem('products', JSON.stringify(this.saveData));
    this.snackbar.open('Products Add To Cart Successfully...!', 'Ok', {
      duration: 4000,
    });
  }

}
