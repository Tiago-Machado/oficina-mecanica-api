import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from './infrastructure/database/typeorm.config';
import { HealthController } from './presentation/controllers/health.controller';
import { ClienteModule } from './presentation/modules/cliente.module';
import { VeiculoModule } from './presentation/modules/veiculo.module';
import { ServicoModule } from './presentation/modules/servico.module';
import { PecaModule } from './presentation/modules/peca.module';
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
    VeiculoModule,
    ServicoModule,
    PecaModule,
  ],
  controllers: [
    HealthController,
    OrdemServicoController,
  ],
  providers: [],
})
export class AppModule {}
