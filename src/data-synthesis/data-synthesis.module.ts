import { Module } from '@nestjs/common';
import { DataSynthesisResolver } from './data-synthesis.resolver';
import { DataSynthesisService } from './data-synthesis.service';
import { DataSynthesisController } from './data-synthesis.controller';

@Module({
    providers: [DataSynthesisResolver, DataSynthesisService],
    controllers: [DataSynthesisController],
})
export class DataSynthesisModule { }