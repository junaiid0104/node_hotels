const express = require("express");
const router = express.Router();
const MenuItem = require("./../models/MenuItem");


router.post('/', async (req,res) => {

    try{

        const data = req.body;

        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log("data saved");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : "Internal Server Error!!"})

    }

})

router.get('/', async(req,res) => {

    try{
        const data = await MenuItem.find();
        console.log("data fetched");
        res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json({error : "Internal Server Error!!"})
    }

  
})


router.get('/:tasteType', async (req,res) => {

    try{

        const tasteType = req.params.tasteType;

        if(tasteType === 'spicy' || tasteType === 'sour' || tasteType === 'sweet'){

            const response = await MenuItem.find({taste : tasteType});
            console.log("data fetched");
            res.status(200).json(response);

        }
        else{
            res.status(404).json({error: "invalid taste type"});
        }

    }
    catch(err){

        console.log(err);
        res.status(500).json({error : "Internal Server Error!!"})

    }
})


router.put("/:id", async (req,res) => {

    try{

        const menuId = req.params.id;
        const updateMenuId = req.body;

        const response = await MenuItem.findByIdAndUpdate(menuId, updateMenuId, {
            new: true, // return updated doc
            runValidators:true, // run mongoose validation
        })

        if(!response){
            return res.status(404).json({error : "Menu Item not found"});
        }

        console.log("data saved");
        res.status(200).json(response);
       

    }catch(err){

        console.log(err);
        res.status(500).json({error : "Internal Server Error!!"})

    }
})

router.delete("/:id", async (req,res) => {

    try{
        const menuId = req.params.id;

        const response = await MenuItem.findByIdAndDelete(menuId);

       
        if(!response){
            return res.status(404).json({error : "Menu Item not found"});
        }

        console.log("data deleted successfully");
        res.status(200).json(response);


    }
    catch(err){


        console.log(err);
        res.status(500).json({error : "Internal Server Error!!"})

    }
})

module.exports = router;