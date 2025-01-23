import { Aranoz } from "../modul/aranozModul.js";

 export async function  getAll  (req, res){
    try {
      let data = await Aranoz.find();
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  }

  export async function  getById  (req, res){
    try {
        let data = await Aranoz.findById(req.params.id);
        res.send(data);
      } catch (error) {
        res.send(error);
      }
  }

  export async function  createOne  (req, res){
   
        try {
            let data = await Aranoz.create(req.body);
            res.send(data);
          } catch (error) {
            res.send(error);
          }
    
  }

  export async function  deleteOne  (req, res){
   
        try {
            let data = await Aranoz.findByIdAndDelete(req.params.id);
            res.send(data);
          } catch (error) {
            res.send(error);
          }
    
  }

