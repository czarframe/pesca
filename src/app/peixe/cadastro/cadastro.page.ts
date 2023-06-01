import { Component, OnInit } from '@angular/core';
import {
  NavController,
  ToastController,
  AlertController,
} from '@ionic/angular';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PeixeService } from 'src/app/service/peixe.service';

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
    private formBuilder: FormBuilder,
    private service: PeixeService,
    private toastController: ToastController,
    private alertController: AlertController
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

  async cadastrar() {
    const nome = this.formulario.value.nome;
    const peso = this.formulario.value.peso;
    const comprimento = this.formulario.value.comprimento;

    if (!nome || !peso || !comprimento) {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Por favor, preencha todos os campos.',
        buttons: ['OK'],
      });
      alert.present();
      return;
    }

    const peixe = {
      nome: nome,
      peso: peso,
      comprimento: comprimento,
    };

    this.service.postPeixe(peixe);

    const toast = await this.toastController.create({
      message: 'Peixe cadastrado com sucesso!',
      duration: 2000,
      position: 'bottom',
    });
    toast.present();

    setTimeout(() => {
      this.navCtrl.navigateBack('/peixe');
    }, 2000);
  }

  voltar() {
    this.navCtrl.back();
  }
}
