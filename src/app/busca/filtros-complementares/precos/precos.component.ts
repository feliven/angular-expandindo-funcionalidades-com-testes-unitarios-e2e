import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuscaService } from '../../../shared/services/form-busca.service';
import { PassagensService } from '../../../busca/services/passagens.service';

@Component({
  selector: 'app-precos',
  templateUrl: './precos.component.html',
  styleUrls: ['./precos.component.scss'],
  standalone: false,
})
export class PrecosComponent {
  precoMin: FormControl<number>;
  precoMax: FormControl<number>;

  constructor(
    public passagemService: PassagensService,
    private formBuscaService: FormBuscaService,
  ) {
    this.precoMin = this.formBuscaService.obterControle<number>('precoMin');
    this.precoMax = this.formBuscaService.obterControle<number>('precoMax');
  }
}
