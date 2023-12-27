module.exports = reqFilter = (req, resp, next) => {
    if(!req.query.age){
        resp.send("Please provide your age to access this page!!")
    }else if(req.query.age<18){
        resp.send("Sorry! child you can't access this page!!")
    }else{
        next();
    }

}