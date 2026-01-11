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
import { CreateVeiculoDto } from '../dtos/create-veiculo.dto';
import { UpdateVeiculoDto } from '../dtos/update-veiculo.dto';

@ApiTags('Veículos')
@Controller('veiculos')
export class VeiculoController {
  @Post()
  @ApiOperation({ summary: 'Criar novo veículo' })
  @ApiResponse({ status: 201, description: 'Veículo criado com sucesso' })
  async create(@Body() createDto: CreateVeiculoDto) {
    return { message: 'Veículo criado (mock)', data: createDto };
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os veículos' })
  async findAll() {
    return { message: 'Lista de veículos (mock)', data: [] };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar veículo por ID' })
  async findOne(@Param('id') id: string) {
    return { message: 'Veículo encontrado (mock)', data: { id } };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar veículo' })
  async update(@Param('id') id: string, @Body() updateDto: UpdateVeiculoDto) {
    return { message: 'Veículo atualizado (mock)', data: { id, ...updateDto } };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletar veículo' })
  async remove(@Param('id') id: string) {}
}
