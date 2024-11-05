import { Resolver, Query, Args } from '@nestjs/graphql';
import { DataSynthesisService } from './data-synthesis.service';

@Resolver('DataSynthesis')
export class DataSynthesisResolver {
    constructor(private dataSynthesisService: DataSynthesisService) { }

    @Query(() => String)
    generateData(@Args('type') type: string): string {
        return this.dataSynthesisService.generateData(type);
    }
}