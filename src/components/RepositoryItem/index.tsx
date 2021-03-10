import './styles.scss';

interface RepositoryProps extends React.HTMLAttributes<HTMLLIElement> {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
} 

const RepositoryItem:React.FC<RepositoryProps> = ({repository, ...props}) => (
    <li className='repository-item' {...props}>
      <strong>{repository?.name ?? 'Default'}</strong>
      <p>{repository?.description ?? 'Texto padrão de uma descrição'}</p>
      <a href={repository?.html_url ?? 'www.google.com'}>Acessar repositório</a>
    </li>
);

export default RepositoryItem; 