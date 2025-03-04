import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutosService } from './autos.service';
import { AutosController } from './autos.controller';
import { Auto } from './entities/auto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Auto])],
  providers: [AutosService],
  controllers: [AutosController],
})
export class AutosModule {}