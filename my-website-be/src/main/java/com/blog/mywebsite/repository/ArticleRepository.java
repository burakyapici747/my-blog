package com.blog.mywebsite.repository;

import com.blog.mywebsite.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface ArticleRepository extends JpaRepository<Article, String>, JpaSpecificationExecutor<Article> {
    List<Article> findByPublishDate(LocalDate date);
    List<Article> findByPublishDateBetween(LocalDate startDate, LocalDate endDate);
    List<Article> findByCategoryName(String categoryName);
    boolean existsByTitle(String title);
    @Query(value = "Select * from article ORDER BY publish_date DESC LIMIT :limit", nativeQuery = true)
    List<Article> findRecentByLimit(@Param("limit") int limit);
}