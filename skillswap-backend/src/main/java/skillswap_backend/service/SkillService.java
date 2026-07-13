package skillswap_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import skillswap_backend.entity.Skill;
import skillswap_backend.repository.SkillRepository;

@Service
public class SkillService {

    @Autowired
    private SkillRepository skillRepository;

    // Add Skill
    public Skill addSkill(Skill skill) {
        return skillRepository.save(skill);
    }

    // Get All Skills
    public List<Skill> getAllSkills() {
        return skillRepository.findAll();
    }

    // Get Skill By ID
    public Skill getSkillById(Long id) {
        return skillRepository.findById(id).orElse(null);
    }

    // Update Skill
    public Skill updateSkill(Long id, Skill skillDetails) {

        Skill skill = skillRepository.findById(id).orElse(null);

        if (skill != null) {
            skill.setSkillName(skillDetails.getSkillName());
            skill.setCategory(skillDetails.getCategory());
            skill.setDescription(skillDetails.getDescription());

            return skillRepository.save(skill);
        }

        return null;
    }

    // Delete Skill
    public String deleteSkill(Long id) {

        Skill skill = skillRepository.findById(id).orElse(null);

        if (skill != null) {
            skillRepository.delete(skill);
            return "Skill deleted successfully!";
        }

        return "Skill not found!";
    }
}