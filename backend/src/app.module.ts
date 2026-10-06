import {Module,Controller,Get,Post,Body} from '@nestjs/common';

const systems=[
{id:'s1',name:'Residencial Jardim Europa',location:'Sorocaba - SP',inverters:[{id:'i1',name:'INV-001',brand:'Fabricante Mock A',status:'Online',power:7.8,generation:32.4},{id:'i2',name:'INV-002',brand:'Fabricante Mock B',status:'Online',power:6.2,generation:25.1}]},
{id:'s2',name:'Comercial Centro',location:'Sorocaba - SP',inverters:[{id:'i3',name:'INV-003',brand:'Fabricante Mock A',status:'Atenção',power:4.9,generation:18.7}]},
{id:'s3',name:'Chácara Horizonte',location:'Votorantim - SP',inverters:[{id:'i4',name:'INV-004',brand:'Fabricante Mock C',status:'Falha',power:0,generation:3.2}]}
];
@Controller()
class AppController{
@Get('health') health(){return {status:'ok',service:'LUX.io API',mock:true};}
@Get('systems') getSystems(){return systems;}
@Get('alerts') getAlerts(){return [{id:'a1',severity:'Falha',message:'INV-004 está em falha de comunicação.',system:'Chácara Horizonte'},{id:'a2',severity:'Atenção',message:'INV-003 apresenta atenção no monitoramento.',system:'Comercial Centro'}];}
@Post('systems') create(@Body() body:any){const s={id:Date.now().toString(),name:body.name,location:body.location||'Sorocaba - SP',inverters:body.inverters||[]};systems.push(s);return s;}
}
@Module({controllers:[AppController]}) export class AppModule{}
