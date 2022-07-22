package ecommerce.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import ecommerce.entities.Product;

public interface ProductService {
	void addProduct(Product p, MultipartFile pic);

	List<Product> findProducts(int sellerId);
	List<Product> allProducts();
	void updateProduct(Product p);
	void deleteProduct(int prodid);
}
