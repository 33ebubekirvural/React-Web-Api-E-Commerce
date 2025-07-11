import { AddShoppingCart } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { IProduct } from "../../model/IProduct";
import { Link } from "react-router";

interface Props {
  product: IProduct
}

function Product({ product }: Props) {
  return (
    <Card>
      <CardMedia sx={{ height: 160, backgroundSize: "contain" }} image={`http://localhost:5074/images/${product.imageUrl}`} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2" color="text-seconder">
          {product.name}
        </Typography>
        <Typography variant="body2" color="secondary">
          {(product.price/100).toFixed(2)} TL
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" startIcon={<AddShoppingCart />} color="success">Add to Card</Button>
        <Button component={Link} to={`/catalog/${product.id}`} variant="outlined" size="small" startIcon={<SearchIcon/>} color="primary">View</Button>
       
      </CardActions>
    </Card>
  );
}

export default Product