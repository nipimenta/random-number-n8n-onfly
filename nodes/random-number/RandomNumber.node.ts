import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeConnectionTypes,
} from 'n8n-workflow';
import { NodeOperationError } from 'n8n-workflow';

export class RandomNumber implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Gerador de Números Aleatórios',
		name: 'Random',
		group: ['transform'],
		version: 1,
		icon: 'file:icon.svg',
		description:
			'Conector n8n no qual recebe o input de mínimo e máximo inteiro para retornar um número aleatório',
		defaults: {
			name: 'Random',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		usableAsTool: true,
		properties: [
			{
				displayName: 'Mínimo',
				name: 'Min',
				type: 'number',
				default: 0,
				placeholder: 'Insira o número mínimo',
				description: 'Valor minimo no qual o numero gerado poderá assumir',
			},
			{
				displayName: 'Máximo',
				name: 'Max',
				type: 'number',
				default: 100,
				placeholder: 'Insira o número máximo',
				description: 'Valor máximo no qual o numero gerado poderá assumir',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();

		let item: INodeExecutionData;

		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
			try {
				const valorMinimo = this.getNodeParameter('Min', itemIndex, 0) as number;
				const valorMaximo = this.getNodeParameter('Max', itemIndex, 100) as number;
				item = items[itemIndex];

				if(valorMinimo>=valorMaximo){
					throw new Error("Valor Mínimo deve ser maior que o valor Máximo")
				}

				item.json.result = await this.helpers.httpRequest({
					url: `https://www.random.org/integers/?num=1&min=${valorMinimo}&max=${valorMaximo}&col=1&base=10&format=plain&rnd=new`,
				});
			} catch (error) {
				if (this.continueOnFail()) {
					items.push({ json: this.getInputData(itemIndex)[0].json, error, pairedItem: itemIndex });
				} else {
					if (error.context) {
						error.context.itemIndex = itemIndex;
						throw error;
					}
					throw new NodeOperationError(this.getNode(), error, {
						itemIndex,
					});
				}
			}
		}

		return [items];
	}
}
