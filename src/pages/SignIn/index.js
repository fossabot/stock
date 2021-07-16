import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";
import { login } from "../../services/auth";
import { Form, Container } from "./styles";

class SignIn extends Component {
  state = {
    username: "",
    password: "",
    error: "",
  };

  handleLogin = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({
        error: "Preencha seu nome de usuário e senha para continuar",
      });
    } else {
      try {
        const response = await api.post("/users/authenticate", {
          username: username,
          password: password,
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Authorization",
            "Access-Control-Allow-Methods": "POST",
            "Content-Type": "application/json;charset=UTF-8",
          },
        });
        login(response.data.token);
        this.props.history.push("/dashboard");
      } catch (err) {
        this.setState({
          error: "Ocorreu um problema com o login, verifique suas credenciais",
        });
      }
    }
  };
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleLogin}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/signup">Registrar</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignIn);
