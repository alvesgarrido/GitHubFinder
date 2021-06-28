# GitHubFinder

O GitHubFinder é um buscador de usuários e repositórios do GitHub, desenvolvido a partir da API disponibilizada pela plataforma.

Link de acesso: https://githubfinder-matheusgarrido.surge.sh/

Com esta aplicação é possível obter dados de um usuário cadastrado no GitHub, detalhes como criação da conta, última atualização, seguidores, repositórios públicos e marcados com stars. Para isto, a pesquisa pode ser realizada de duas formas, pelo campo (input) de busca presente na página home (https://githubfinder-matheusgarrido.surge.sh/), e pela barra de navegação (ex.: https://githubfinder-matheusgarrido.surge.sh/alvesgarrido).

#Prints das telas da aplicação:
![image](https://user-images.githubusercontent.com/60436191/123671441-a559bf80-d814-11eb-9000-fcbff508f105.png)
![image](https://user-images.githubusercontent.com/60436191/123671493-bacee980-d814-11eb-9474-b39632d42f89.png)
![image](https://user-images.githubusercontent.com/60436191/123671568-d0441380-d814-11eb-9955-ef8abb6b93ee.png)
![image](https://user-images.githubusercontent.com/60436191/123671651-e520a700-d814-11eb-8f4f-d857e110a8c1.png)
![image](https://user-images.githubusercontent.com/60436191/123671703-f36ec300-d814-11eb-9997-2b482c45b3c0.png)
![image](https://user-images.githubusercontent.com/60436191/123671932-316be700-d815-11eb-98cc-9b66a663ac4f.png)
![image](https://user-images.githubusercontent.com/60436191/123671997-3f216c80-d815-11eb-8e1a-4c060a3a54c8.png)
![image](https://user-images.githubusercontent.com/60436191/123672046-4d6f8880-d815-11eb-965b-e7e850b9f5e5.png)
![image](https://user-images.githubusercontent.com/60436191/123672147-65dfa300-d815-11eb-9a64-f4fcf43e4789.png)

A listagem de repositórios também permite o redirecionamento do usuário para a plataforma GitHub, para visualização de arquivos e códigos. Também é possível ser redirecionado para o perfil pesquisado, via clique no botão que se encontra no profile.

#Páginas Principais:
- Home: input de busca e renderização do profile do usuário encontrado.
- Detalhes: detalhes de utilização do github do usuário pesquisado e listagem de repositórios.

#Tecnologias e Bibliotecas utilizadas no desenvolvimento desta aplicação:
- ReactJS.
- JS.
- React-router-dom.
- Material-UI.
-Styled-components.

#Página secundária:
- Erro: página renderizada caso não seja encontrado o endereço informado pelo usuário.

#Responsividade:
- As telas encontram-se responsivas, utilizando media queries no styled-components.

#Fluxograma simplificado da aplicação:
![fluxograma-githubfinder](https://user-images.githubusercontent.com/60436191/123671267-73e0f400-d814-11eb-8178-8f7449dda060.png)

