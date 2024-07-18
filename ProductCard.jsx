import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

const ProductCard = ({ product }) => {
  return (
    <Card containerStyle={styles.card}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>Price: Rs{product.price}</Text>
          <Text style={styles.productMRP}>MRP: Rs{product.mrp}</Text>
        </View>
        <Text style={styles.productDiscount}>Discount: {product.discount}%</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f8f9fa',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 20,
  },
  productImage: {
    width: '100%',
    height: 270,
    borderRadius: 10,
    marginBottom: 10,
  },
  textContainer: {
    paddingHorizontal: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745',
  },
  productMRP: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#dc3545',
  },
  productDiscount: {
    fontSize: 16,
    color: '#ffc107',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  addButton: {
    backgroundColor: '#ff8c00',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  buyButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProductCard;
