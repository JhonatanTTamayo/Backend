import { Injectable } from '@nestjs/common';
import { GreetServiceInterface }from './greet-service-interface.js';
import { GreetGroupInDto } from './dto/greet-group-in-dto.js';
import { GreetGroupOutDto } from './dto/greet-group-out-dto.js';
import { GreetPersonOutDto } from './dto/greet-person-out-dto.js';

@Injectable()
export class GreetServiceService implements GreetServiceInterface{
    greetPerson(name: string): GreetPersonOutDto {
        if (name == '') {
            return { 
                greetings: '', 
                successful: false 
            }
        } return {
            greetings: `Hello ${name}`,
            successful: true
        }

           
    }
    greetGroup(greetGroupInDto: GreetGroupInDto): GreetGroupOutDto {
        if (greetGroupInDto == null || greetGroupInDto == undefined || greetGroupInDto.people == null || greetGroupInDto.people == undefined || greetGroupInDto.people.length == 0) {
            return { 
                greetings: '', 
                successful: false 
            }
        }
        let out:string = "Hello ";
        greetGroupInDto.people.forEach(person => {
            out += `, ${person}`;
        });
        return {
            greetings: out,
            successful: true
        }
        
    }
}