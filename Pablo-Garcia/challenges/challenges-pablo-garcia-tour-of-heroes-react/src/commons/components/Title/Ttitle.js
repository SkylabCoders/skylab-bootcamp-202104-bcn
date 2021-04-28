
import {Title} from './styles'

export const Heading = ({Type, Content}) => {
    const Tag = 'h' + Type;
    return(
      <Title>
         <Tag> {Content}</Tag>
      </Title>
    )
}
