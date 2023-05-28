import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  imagemPeixe: File | any;
  imagemPeixeUrl: string | any;
  peso = 0;
  nome = '';
  meuFormulario: FormGroup;

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) {
    this.meuFormulario = this.formBuilder.group({
      nome: ['', Validators.required],
      peso: ['', Validators.required],
      comprimento: ['', Validators.required],
      imagem: ['', Validators.required],
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
