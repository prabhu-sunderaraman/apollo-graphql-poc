let app = require("express")();
let db = require("./db");

app.get("/service/dev/ougroupmanagement/v1/api/OugroupMembers/Group/:id", (req, res) => {
    let groupMember = db.ouGroupMembers.find(it => it.groupId+"" === req.params.id);
    if(groupMember) {
        res.end(JSON.stringify(groupMember));
    } else {
        res.end(JSON.stringify({ groupId: req.params.id }));
    }
});

app.get("/service/dev/ougroupmanagement/v1/api/OugroupMembers/Member/:id", (req, res) => {
    let member = undefined;
    db.ouGroupMembers.find(it => {
        let outMember = it.members.find(member => member.id === req.params.id);
        if (outMember) {
            member = outMember;
        }
    });
    if(member) {
        res.end(JSON.stringify(member));
    } else {
        res.end(JSON.stringify({ id: req.params.id }));
    }
});

app.listen(8080, () => {
    console.log("External service started in port 8080");
});