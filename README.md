# NodeGraphQLAPI

backend-challenge

O seu trabalho é descobrir em quais planetas pode instalar seus novos postos de carregamento para otimizar o serviço de recarga.
Para isso:

utilize a API da Arcsecond, o que te possibilita buscar os planetas fora do sistema solar!(mais especificamente batendo em GET /exoplanets/)
só mostre os planetas com gravidade alta, os dados não mostram exatamente qual gravidade o planeta tem, mas a Voltbras fez os cálculos e os planetas ideais(com gravidade alta),
são aproximadamente os mesmos que têm sua massa(exoplanet.mass.value) maior que 25 M_jup (exoplanet.mass.unit)

Requisitos
Sinta-se livre para fazer qualquer um dos proximos requisitos diferente do que foi pedido desde que consiga justificar a mudança. Ex.: não fiz o requisito de tal maneira pois a implementação que eu fiz é mais perfomatica e segura.


 Crie um servidor em Node.js usando Apollo GraphQL Server

 Crie o schema GraphQL com uma query suitablePlanets, que retorna os dados dos planetas com gravidade alta

 Crie uma mutation installStation, que dado um planeta, instala uma estação de carregamento no planeta(é sugerido criar uma tabela em algum DB que guarde a informação de aonde estão instaladas as estações)

 Use um RESTDataSource para pegar os dados da Arcsecond

 Deixe aberto em algum repositório open-source(gitlab, github, etc...)

 Integre o servidor com algum banco de dados(para marcar onde as estações foram instaladas)

 Documente o seu projeto, e explique como rodar ele
