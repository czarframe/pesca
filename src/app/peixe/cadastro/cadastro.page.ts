import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  imagemPeixe: File | any;
  imagemPeixeUrl: string | any;
  nomeControl: FormControl;
  pesoControl: FormControl;
  comprimentoControl: FormControl;
  imagemControl: FormControl;
  formulario: FormGroup;

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) {
    this.nomeControl = new FormControl('', Validators.required);
    this.pesoControl = new FormControl('', Validators.required);
    this.comprimentoControl = new FormControl('', Validators.required);
    this.imagemControl = new FormControl('', Validators.required);

    this.formulario = this.formBuilder.group({
      nome: this.nomeControl,
      peso: this.pesoControl,
      comprimento: this.comprimentoControl,
      imagem: this.imagemControl,
    });
  }

  ngOnInit() {}

  selecionarImagem(event: any) {
    this.imagemPeixe = event.target.files[0];
    this.mostrarImagem();
  }

  mostrarImagem() {
    if (this.imagemPeixe) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagemPeixeUrl = e.target.result;
      };
      reader.readAsDataURL(this.imagemPeixe);
    }
  }

  cadastrar() {
    alert('Sucesso!');
  }

  voltar() {
    this.navCtrl.back();
  }
}
