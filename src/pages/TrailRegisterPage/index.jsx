import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import styles from "./styles.module.css";
import Button from "../../components/Button";

function TrailRegisterPage() {
  const states = ["SC", "SP", "RJ"];
  const difficulties = ["Fácil", "Moderado", "Difícil"];
  const types = ["Ida e volta", "Ponto a ponto"];

  return (
    <Container
      
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
                id="trail-name"
                label="digite o nome da trilha"
                variant="outlined"
                type="text"
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
                id="trail-duration"
                label="digite a duração em minutos"
                variant="outlined"
                type="number"
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
                fullWidth
                id="trail-path"
                label="digite a distância em km"
                variant="outlined"
                type="number"
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
                id="city"
                label="digite o nome da cidade"
                variant="outlined"
                type="text"
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
                  labelId="label-state"
                  id="state"
                  label="Selecione o estado"
                  type="text"
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
                id="username"
                label="seu nome completo"
                variant="outlined"
                type="text"
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
                  labelId="label-difficulty"
                  id="difficulty"
                  label="Selecione a dificuldade"
                  type="text"
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
                  labelId="label--trail-type"
                  id="trail-type"
                  label="Selecione o tipo de trilha"
                  type="text"
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
                id="trail-url"
                label="insira um link de uma imagem da trilha"
                variant="outlined"
                type="text"
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Adicione mais campos conforme necessário */}
      </Grid>

      <div className={styles.btn_wrapper}>
        <Button value={"Cadastrar"} />
        <Button value={"Voltar"} className={styles.btn_back} />
      </div>
    </Container>
  );
}

export default TrailRegisterPage;
