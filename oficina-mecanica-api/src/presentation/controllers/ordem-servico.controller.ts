import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { CreateOrdemServicoDto } from '../dtos/create-ordem-servico.dto';
import { UpdateStatusOsDto } from '../dtos/update-status-os.dto';
import { StatusOS } from '../../domain/enums/status-os.enum';

@ApiTags('Ordens de Serviço')
@Controller('ordens-servico')
export class OrdemServicoController {
  @Post()
  @ApiOperation({ 
    summary: 'Criar nova ordem de serviço',
    description: 'Cria uma OS com status RECEBIDA e gera orçamento automático'
  })
  @ApiResponse({ status: 201, description: 'OS criada com sucesso' })
  async create(@Body() createDto: CreateOrdemServicoDto) {
    // Calcular valor total
    const totalServicos = createDto.servicos.reduce(
      (acc, item) => acc + (item.valor * item.quantidade), 
      0
    );
    const totalPecas = createDto.pecas.reduce(
      (acc, item) => acc + (item.valor * item.quantidade), 
      0
    );
    const valorTotal = totalServicos + totalPecas;

    return {
      message: 'Ordem de serviço criada (mock)',
      data: {
        id: 'uuid-gerado',
        ...createDto,
        status: StatusOS.RECEBIDA,
        valorTotal,
        orcamentoAprovado: false,
        criadoEm: new Date(),
      },
    };
  }

  @Get()
  @ApiOperation({ 
    summary: 'Listar ordens de serviço',
    description: 'Lista OS ordenadas por prioridade (EM_EXECUCAO > AGUARDANDO_APROVACAO > DIAGNOSTICO > RECEBIDA). Exclui FINALIZADA e ENTREGUE da listagem.'
  })
  @ApiQuery({ name: 'incluirFinalizadas', required: false, type: Boolean })
  async findAll(@Query('incluirFinalizadas') incluirFinalizadas?: boolean) {
    const mockData = [
      { id: '1', status: StatusOS.EM_EXECUCAO, criadoEm: '2024-01-10' },
      { id: '2', status: StatusOS.AGUARDANDO_APROVACAO, criadoEm: '2024-01-09' },
      { id: '3', status: StatusOS.DIAGNOSTICO, criadoEm: '2024-01-08' },
      { id: '4', status: StatusOS.RECEBIDA, criadoEm: '2024-01-07' },
    ];

    return {
      message: 'Lista de ordens de serviço (mock - ordenadas por prioridade)',
      data: mockData,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar ordem de serviço por ID' })
  async findOne(@Param('id') id: string) {
    return {
      message: 'Ordem de serviço encontrada (mock)',
      data: {
        id,
        status: StatusOS.RECEBIDA,
        valorTotal: 250.50,
      },
    };
  }

  @Get(':id/status')
  @ApiOperation({ 
    summary: 'Consultar status da ordem de serviço',
    description: 'Endpoint específico para consulta de status'
  })
  async getStatus(@Param('id') id: string) {
    return {
      message: 'Status consultado (mock)',
      data: {
        id,
        status: StatusOS.EM_EXECUCAO,
        atualizadoEm: new Date(),
      },
    };
  }

  @Patch(':id/status')
  @ApiOperation({ 
    summary: 'Atualizar status da ordem de serviço',
    description: 'Atualiza o status seguindo as transições válidas'
  })
  async updateStatus(
    @Param('id') id: string,
    @Body() updateStatusDto: UpdateStatusOsDto,
  ) {
    return {
      message: 'Status atualizado (mock)',
      data: {
        id,
        statusAnterior: StatusOS.RECEBIDA,
        statusAtual: updateStatusDto.status,
        atualizadoEm: new Date(),
      },
    };
  }

  @Patch(':id/aprovar')
  @ApiOperation({ 
    summary: 'Aprovar orçamento da ordem de serviço',
    description: 'Aprova o orçamento e muda status para EM_EXECUCAO'
  })
  @ApiResponse({ status: 200, description: 'Orçamento aprovado' })
  @ApiResponse({ status: 400, description: 'OS não está aguardando aprovação' })
  async aprovarOrcamento(@Param('id') id: string) {
    return {
      message: 'Orçamento aprovado (mock)',
      data: {
        id,
        orcamentoAprovado: true,
        status: StatusOS.EM_EXECUCAO,
        atualizadoEm: new Date(),
      },
    };
  }
}
