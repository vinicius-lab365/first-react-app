import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";
import Button from "../../components/Button";
import { TrailsContext } from "../../context/trailsContext";
import { useContext } from "react";

function TrailRegisterPage() {
  const states = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];
  const difficulties = ["Fácil", "Moderado", "Difícil"];
  const types = ["caminhada / trekking", "ciclismo"];

  const { register, handleSubmit } = useForm();
  const { addTrail } = useContext(TrailsContext);

  function sendForm(handleSubmit) {
    console.log(handleSubmit);
    addTrail({...handleSubmit, duracao: Number(handleSubmit.duracao), trajeto: Number(handleSubmit.trajeto)});
  }

  return (
    <Container
      component={"form"}
      onSubmit={handleSubmit(sendForm)}
      sx={{
        mt: 20,
        mb: 31,
      }}
    >
      <h1 className={styles.title}>Cadastro de trilhas</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <label className={styles.label}>Nome da trilha</label>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="nomeTrilha"
                label="digite o nome da trilha"
                variant="outlined"
                type="text"
                {...register("nomeTrilha", {
                  required: "Campo obrigatório",
                  maxLength: { value: 100, message: "Máximo 100 caracteres" },
                })}
              />
            </Grid>
          </Grid>
        </Grid>

        {/*  */}

        <Grid item xs={6}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <label className={styles.label}>Duração estimada (min)</label>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="duracao"
                label="digite a duração em minutos"
                variant="outlined"
                type="number"
                {...register("duracao", {
                  required: "Campo obrigatório",
                })}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <label className={styles.label}>Trajeto (km)</label>
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputProps={{
                  step: 0.1
                }}
                fullWidth
                id="trajeto"
                label="digite a distância em km"
                variant="outlined"
                type="number"
                {...register("trajeto", {
                  required: "Campo obrigatório",
                })}
              />
            </Grid>
          </Grid>
        </Grid>

        {/*  */}

        <Grid item xs={6}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <label className={styles.label}>Cidade</label>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="cidade"
                label="digite o nome da cidade"
                variant="outlined"
                type="text"
                {...register("cidade", {
                  required: "Campo obrigatório",
                  maxLength: { value: 60, message: "Máximo 60 caracteres" },
                })}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <label className={styles.label}>Estado</label>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="label-state">Selecione o estado</InputLabel>
                <Select
                  defaultValue={""}
                  labelId="label-state"
                  id="estado"
                  label="Selecione o estado"
                  type="text"
                  {...register("estado", {
                    required: "Campo obrigatório",
                    maxLength: { value: 2, message: "Máximo 2 caracteres" },
                  })}
                >
                  {states.map((estado) => (
                    <MenuItem key={estado} value={estado}>
                      {estado}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        {/*  */}

        <Grid item xs={6}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <label className={styles.label}>Nome completo usuário</label>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="nomeUsuario"
                label="seu nome completo"
                variant="outlined"
                type="text"
                {...register("nomeUsuario", {
                  required: "Campo obrigatório",
                  maxLength: { value: 100, message: "Máximo 100 caracteres" },
                })}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <label className={styles.label}>Dificuldade</label>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="label-state">
                  Selecione a dificuldade
                </InputLabel>
                <Select
                  defaultValue={""}
                  labelId="label-difficulty"
                  id="dificuldade"
                  label="Selecione a dificuldade"
                  type="text"
                  {...register("dificuldade", {
                    required: "Campo obrigatório",
                  })}
                >
                  {difficulties.map((difficultyy) => (
                    <MenuItem key={difficultyy} value={difficultyy}>
                      {difficultyy}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        {/*  */}

        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <label className={styles.label}>Tipo de trilha</label>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="label-trail-type">
                  Selecione o tipo de trilha
                </InputLabel>
                <Select
                  defaultValue={""}
                  labelId="label-trail-type"
                  id="tipo"
                  label="Selecione o tipo de trilha"
                  type="text"
                  {...register("tipo", {
                    required: "Campo obrigatório",
                  })}
                >
                  {types.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        {/*  */}

        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <label className={styles.label}>URL imagem da trilha</label>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="urlImagem"
                label="insira um link de uma imagem da trilha"
                variant="outlined"
                type="text"
                {...register("urlImagem", {
                  required: "Campo obrigatório",
                  maxLength: { value: 300, message: "Máximo 300 caracteres" },
                })}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Adicione mais campos conforme necessário */}
      </Grid>

      <div className={styles.btn_wrapper}>
        <Button value={"Cadastrar"} type="submit" />
        <Button value={"Voltar"} className={styles.btn_back} />
      </div>
    </Container>
  );
}

export default TrailRegisterPage;
