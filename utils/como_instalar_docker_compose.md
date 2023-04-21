Para instalar o **Docker Compose**, siga os passos abaixo:

1. **Verifique se o Docker já está instalado:** Para instalar o Docker Compose, você precisa ter o Docker instalado em seu sistema. Portanto, certifique-se de que o Docker já esteja instalado. Você pode verificar digitando `docker --version` no terminal.

2. **Baixe a versão atual do Docker Compose:** Para baixar a versão mais atual do Docker Compose, acesse a [página de lançamentos do Docker Compose no GitHub](https://github.com/docker/compose/releases). Procure pela versão mais recente disponível e selecione o sistema operacional que você está usando.

3. **Baixe o Docker Compose:** Depois de selecionar a versão apropriada, baixe o arquivo do Docker Compose. Você pode fazer isso usando o seguinte comando no terminal:

```
sudo curl -L "https://github.com/docker/compose/releases/download/{VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
Certifique-se de substituir {VERSION} pelo número da versão mais recente.

4. **Defina as permissões:** Depois de baixar o arquivo, você precisa definir as permissões corretas para o Docker Compose. Para fazer isso, execute o seguinte comando:

```
sudo chmod +x /usr/local/bin/docker-compose
```
5. **Verifique a instalação:** Após a instalação, verifique se o Docker Compose foi instalado corretamente digitando `docker-compose --version` no terminal. Se tudo estiver correto, você deverá ver a versão instalada do Docker Compose.

