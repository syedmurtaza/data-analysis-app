import { Controller, Get, Query, Render } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { DataSynthesisService } from './data-synthesis.service';

@Controller('data-synthesis')
export class DataSynthesisController {
    constructor(private dataSynthesisService: DataSynthesisService) { }

    @Get()
    @Render('index')
    @ApiOperation({ summary: 'Generate synthetic data' })
    @ApiQuery({ name: 'type', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns generated data' })
    generateData(@Query('type') type: string = 'Good') {
        const data = this.dataSynthesisService.generateData(type);
        return { message: data, type: type };
    }
}