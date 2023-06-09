import { openDB } from './config/db.js'
import {
  SELECT_VITIMA_BY_FAIXA_DE_DADE,
  SELECT_VITIMA_BY_GENERO_FEMININO_AND_HOUVE_OBITO,
  SELECT_VITIMA_BY_OCORRENCIA_BY_ENDERECO_IGNORING_CASE,
} from './config/queries.js'
;(async () => {
  const db = await openDB()

  let results = await db.all(SELECT_VITIMA_BY_FAIXA_DE_DADE, 25, 30)
  console.log('\nSELECT_VITIMA_BY_FAIXA_DE_DADE');
  console.log(results)

  results = await db.all(
    SELECT_VITIMA_BY_GENERO_FEMININO_AND_HOUVE_OBITO,
    'Feminino',
    1
  )
  console.log('\nSELECT_VITIMA_BY_GENERO_FEMININO_AND_HOUVE_OBITO');
  console.log(results)

  results = await db.all(SELECT_VITIMA_BY_OCORRENCIA_BY_ENDERECO_IGNORING_CASE, 'rua a')
  console.log('\nSELECT_VITIMA_BY_OCORRENCIA_BY_ENDERECO_IGNORING_CASE');
  console.log(results)
})()
