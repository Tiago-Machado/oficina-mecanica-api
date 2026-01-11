import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateServicoDto } from '../dtos/create-servico.dto';
import { UpdateServicoDto } from '../dtos/update-servico.dto';

@ApiTags('Serviços')
@Controller('servicos')
export class ServicoController {
  @Post()
  @ApiOperation({ summary: 'Criar novo serviço' })
  @ApiResponse({ status: 201, description: 'Serviço criado com sucesso' })
  async create(@Body() createDto: CreateServicoDto) {
    return { message: 'Serviço criado (mock)', data: createDto };
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os serviços' })
  async findAll() {
    return { message: 'Lista de serviços (mock)', data: [] };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar serviço por ID' })
  async findOne(@Param('id') id: string) {
    return { message: 'Serviço encontrado (mock)', data: { id } };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar serviço' })
  async update(@Param('id') id: string, @Body() updateDto: UpdateServicoDto) {
    return { message: 'Serviço atualizado (mock)', data: { id, ...updateDto } };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletar serviço' })
  async remove(@Param('id') id: string) {}
}
