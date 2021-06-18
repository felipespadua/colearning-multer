const users = [
  {
    id: 0,
    nome: "Felipe",
    idade: 26,
    sexo: "M",
    foto: "",
    endereco: "Rua São Carlos do Pinhal",
  },
];

const usersController = {
  getUsers: (req, res) => {
    res.render("index", { users });
  },
  createUser: (req, res) => {
    const { nome, idade, sexo, endereco } = req.body;
    let foto;
    if (req.file) {
      foto = req.file.path;
    }
    const id = users[users.length - 1].id + 1;
    const user = {
      id,
      nome,
      idade,
      sexo,
      endereco,
      foto,
    };
    users.push(user);
    res.render("index", { users });
  },
};

module.exports = usersController;
