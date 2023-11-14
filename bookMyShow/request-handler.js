export async function add(req,res){
    try {
        prompt("HELLO")
    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
}