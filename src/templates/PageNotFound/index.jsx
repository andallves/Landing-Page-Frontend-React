import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title="Error 404"
      html="<p>A página que você busca não foi encontrada. [Clique aqui para voltar](/)"
    />
  );
};
