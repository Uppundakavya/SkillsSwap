package skillswap_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import skillswap_backend.entity.Skill;
import skillswap_backend.service.SkillService;

@RestController
@RequestMapping("/skills")
@CrossOrigin(origins = "*")
public class SkillController {

    @Autowired
    private SkillService skillService;

    // Add Skill
    @PostMapping
    public Skill addSkill(@RequestBody Skill skill) {
        return skillService.addSkill(skill);
    }

    // Get All Skills
    @GetMapping
    public List<Skill> getAllSkills() {
        return skillService.getAllSkills();
    }

    // Get Skill By ID
    @GetMapping("/{id}")
    public Skill getSkillById(@PathVariable Long id) {
        return skillService.getSkillById(id);
    }

    // Update Skill
    @PutMapping("/{id}")
    public Skill updateSkill(@PathVariable Long id,
                             @RequestBody Skill skill) {
        return skillService.updateSkill(id, skill);
    }

    // Delete Skill
    @DeleteMapping("/{id}")
    public String deleteSkill(@PathVariable Long id) {
        return skillService.deleteSkill(id);
    }
}
