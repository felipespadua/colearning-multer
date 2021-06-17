const users = [
  {
    nome: "Felipe",
    idade: 26,
    sexo: "M",
    foto: "",
    endereco: "Rua São Carlos do Pinhal",
  },
];

const usersController = {
  getUsers: (req, res) => {
    res.send(users);
  },
};

module.exports = usersController;
