import { Injectable } from '@nestjs/common';

@Injectable()
export class DataSynthesisService {
    generateData(type: string): string {
        const data = {
            Good: 'Excellent performance!',
            Bad: 'Needs improvement.',
            Angry: 'Furious reaction!',
            Happy: 'Joyful response!',
        };
        return data[type] || 'Unknown type';
    }
}