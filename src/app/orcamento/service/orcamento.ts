import { Tipoclassificacao } from 'src/app/tipoclassificacao/service/tipoclassificacao';
export class Orcamento {
    id?: number;
    tipoclassificacaoId: number;
    projeto: number;
    descricao: string;
    tipoclassificacao?:Tipoclassificacao[]
}
