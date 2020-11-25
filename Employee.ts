
import { Skill } from './Skill';
import { Department } from './Departemnt';


export interface Employee
{
    id:number;
    name:string;
    salary:number;
    permanent:string;
    departments:Department[];
    skill:Skill[];
    dob:Date;
}