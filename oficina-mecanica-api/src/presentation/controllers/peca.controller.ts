import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreatePecaDto } from '../dtos/create-peca.dto';
import { UpdatePecaDto } from '../dtos/update-peca.dto';
import { UpdateEstoquePecaDto } from '../dtos/update-estoque-peca.dto';

@ApiTags('Peças')
@Controller('pecas')
export class PecaController {
  @Post()
  @ApiOperation({ summary: 'Criar nova peça' })
  @ApiResponse({ status: 201, description: 'Peça criada com sucesso' })
  async create(@Body() createDto: CreatePecaDto) {
    return { message: 'Peça criada (mock)', data: createDto };
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as peças' })
  async findAll() {
    return { message: 'Lista de peças (mock)', data: [] };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar peça por ID' })
  async findOne(@Param('id') id: string) {
    return { message: 'Peça encontrada (mock)', data: { id } };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar peça' })
  async update(@Param('id') id: string, @Body() updateDto: UpdatePecaDto) {
    return { message: 'Peça atualizada (mock)', data: { id, ...updateDto } };
  }

  @Patch(':id/estoque')
  @ApiOperation({ summary: 'Atualizar estoque da peça' })
  async updateEstoque(
    @Param('id') id: string,
    @Body() updateEstoqueDto: UpdateEstoquePecaDto,
  ) {
    return {
      message: 'Estoque atualizado (mock)',
      data: { id, quantidade: updateEstoqueDto.quantidade },
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletar peça' })
  async remove(@Param('id') id: string) {}
}
