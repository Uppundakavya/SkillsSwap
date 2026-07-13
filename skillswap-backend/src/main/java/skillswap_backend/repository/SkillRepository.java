package skillswap_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import skillswap_backend.entity.Skill;

public interface SkillRepository extends JpaRepository<Skill, Long> {

}
