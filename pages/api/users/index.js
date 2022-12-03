import connector from "../../../database/MongoConnector";
import { Users } from "../../../database/Hancler";
import { User } from "@nextui-org/react";
const handler=(req,res)=> {
    connector().catch(() => res.status(405).json({error:'error in the connection'}));


const {method}=req

switch (method) {
    case 'GET':
        res.status(200).json({name:'GET REQ '});
        User(req,res)
        break;
        case 'POST':
            res.status(200).json({name:'POST REQ '});
            break;
            case 'DELETE':
                res.status(200).json({name:'DELETE REQ '})        
                break;
                case 'PUT':
                    res.status(200).json({name:'PUT REQ '});
                    break;
    default:
        res.setHeader('Allow',['GET','POST','DELETE','PUT'])
       res.status(405).end(`method ${method} not allowed`)
}

res.status(200).json({name:'hi'})
}
export default  handler