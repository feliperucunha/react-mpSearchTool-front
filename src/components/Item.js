import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Item = (props) => {
    return(
        <div>
          { props.Item ? (
                <Card>
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                        image={props.Item.fields.ItemImage.fields.file.url}
                        title={props.Item.fields.title}
                        />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.Item.fields.title}
                        </Typography>
                        <Typography component="p">
                            {props.Item.fields.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href={props.Item.fields.url} target="_blank">
                            Ir para item
                        </Button> 
                    </CardActions>
                </Card>
          ): null }  
        </div>
    )
}
export default Item