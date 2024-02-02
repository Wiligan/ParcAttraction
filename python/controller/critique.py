import request.request as req

def add_critique(data):
    print(data, flush=True)
    if (not "nom" in data or data["nom"] == ""):
        return False

    if (not "prenom" in data or data["prenom"] == ""):
            return False
    
    if (not "critique" in data or data["critique"] == ""):
        return False

    if (not "attraction_id" in data or data["attraction_id"] is None):
        return False

    if (not "visible" in data):
        data["visible"] = True

    if ("critique_id" in data and data["critique_id"]):
      requete = f"UPDATE critique SET nom='{data['nom']}', prenom='{data['prenom']}', critique='{data['critique']}', attraction_id={data['attraction_id']} WHERE critique_id = {data['critique_id']}"
      req.insert_in_db(requete)
      id = data['attraction_id']
    else:
      requete = "INSERT INTO attraction (nom, prenom, critique, attraction_id) VALUES (?, ?, ?, ?);"
      id = req.insert_in_db(requete, (data["nom"], data["prenom"], data["critique"], data["attraction_id"]))

    return id

def get_all_critique():
    json = req.select_from_db("SELECT * FROM critique")
    
    return json

def get_critique(id):
    if (not id):
        return False

    json = req.select_from_db("SELECT * FROM critique WHERE critique_id = ?", (id,))

    if len(json) > 0:
        return json[0]
    else:
        return []

def delete_critique(id):
    if (not id):
        return False

    req.delete_from_db("DELETE FROM critique WHERE critique_id = ?", (id,))

    return True