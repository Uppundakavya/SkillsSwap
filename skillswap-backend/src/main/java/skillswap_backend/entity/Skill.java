package skillswap_backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name="skills")
public class Skill {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private String skillName;

    private String category;

    private String description;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    public Skill() {
    }

    public Skill(Long id, String skillName, String category, String description, User user) {
        this.id = id;
        this.skillName = skillName;
        this.category = category;
        this.description = description;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id=id;
    }

    public String getSkillName() {
        return skillName;
    }

    public void setSkillName(String skillName) {
        this.skillName=skillName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category=category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description=description;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user=user;
    }
}