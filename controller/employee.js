const {insertToDB,deleteEmployee,graduatedAfter2015,findExperiencedEmployee,highPaidEmployee,updateSalaryEmployee}=require("../database/connection");

const saveEmployeeData=async(req,res)=>{
    const employeeData=req.body;
    try {
     const result=await insertToDB(employeeData);
     return res.status(200).send(result);   
    } catch (error) {
        return res.status(500).send({message:"something went wrong"});
    }

}
const getHighPaidEmployee=async(req,res)=>{
    try {
   const filter={salary:{$gt:"30000"}};
   const result=await highPaidEmployee(filter);
     return res.status(200).send(result);   
    } catch (error) {
        return res.status(500).send({message:"something went wrong"});
    }

}
const getExperiencedEmployee=async(req,res)=>{
    try {
   const filter={overallExp:{$gte:"2"}};
   const result=await findExperiencedEmployee(filter);
     return res.status(200).send(result);   
    } catch (error) {
        return res.status(500).send({message:"something went wrong"});
    }

}
const getGraduateAfter2015=async(req,res)=>{
    try {
   const filter={yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}};
   const result=await graduatedAfter2015(filter)
     return res.status(200).send(result);   
    } catch (error) {
        return res.status(500).send({message:"something went wrong"});
    }

}
const updateSalary=async(req,res)=>{
    const filter=req.body.filter;
    const filterValue={salary:{$gt:filter.salary}};
    const update=req.body.update;
    const newValue={$set:{salary:update.salary}};
    try {
   const result=await updateSalaryEmployee(filterValue,newValue);
     return res.status(200).send(result);   
    } catch (error) {
        return res.status(500).send({message:"something went wrong"});
    }

}

const deleteEmployeeY=async(req,res)=>{
    const filter=req.body.filter;
    const filterValue={lastCompany:{$eq:filter.lastCompany}};
    try {
        const result=await deleteEmployee(filterValue);
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send({message:"something went wrong"});
    }
}

module.exports={
    saveEmployeeData,deleteEmployeeY,updateSalary,getGraduateAfter2015,getHighPaidEmployee,getExperiencedEmployee
}