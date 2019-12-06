const baseUrl = "http://localhost:3500";

class TrajetService{
    static async list(){
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        let call = await fetch(`${baseUrl}/trajets`, init);
        return call;
    }   
     
    static async getTrajets(){
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        let call = await fetch(`${baseUrl}/trajets/getall`, init);
        return call;
    }
    
    static async trajetsEnAttenteBras(id){
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        let call = await fetch(`${baseUrl}/trajets/attente/${id}`, init);
        return call;
    }    
    

    static async details(id){
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        let call = await fetch(`${baseUrl}/trajet/${id}`, init);
        return call;
    }

    static async create(body){
        let init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        let call = await fetch(`${baseUrl}/trajet`, init);
        return call;
    }

    static async update(id, body){
        let init = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        let call = await fetch(`${baseUrl}/trajet/${id}`, init);
        return call;
    }

    static async delete(id){
        let init = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        };
        let call = await fetch(`${baseUrl}/trajet/${id}`, init);
        return call;
    }

    static async getClient(id){
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        let call = await fetch(`${baseUrl}/trajet/client/${id}`, init);
        return call;
    }



}

export default TrajetService;