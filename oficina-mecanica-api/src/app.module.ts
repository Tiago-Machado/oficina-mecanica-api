import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from './infrastructure/database/typeorm.config';
import { HealthController } from './presentation/controllers/health.controller';
import { ClienteModule } from './presentation/modules/cliente.module';
import { VeiculoController } from './presentation/controllers/veiculo.controller';
import { ServicoController } from './presentation/controllers/servico.controller';
import { PecaController } from './presentation/controllers/peca.controller';
import { OrdemServicoController } from './presentation/controllers/ordem-servico.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        getTypeOrmConfig(configService),
    }),
    ClienteModule,
  ],
  controllers: [
    HealthController,
    VeiculoController,
    ServicoController,
    PecaController,
    OrdemServicoController,
  ],
  providers: [],
})
export class AppModule {}
